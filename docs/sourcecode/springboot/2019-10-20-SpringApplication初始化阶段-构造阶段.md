# 构造阶段<sup> <font color=red size=3>[version：2.2.0.RELEASE]</font></sup>



SpringApplication的初始化阶段属于运行前的准备阶段。初始化阶段主要由两部分组成：构造阶段和初始化阶段。下面要先讲一下构造阶段。

## SpringApplication的主配置类

​	以一个最简单的引导类为例：

```java
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

​	进入`SpringApplication.run()`方法：

```java
public class SpringApplication {
   ...
   public static ConfigurableApplicationContext run(Class<?> primarySource, String... args) {
		return run(new Class<?>[] { primarySource }, args);
	}
    
    public static ConfigurableApplicationContext run(Class<?>[] primarySources, String[] args) {
		return new SpringApplication(primarySources).run(args);
	}
   
}
```

​	我们发现，引导类中对`SpringApplication.run()`方法的调用相当于调用的`new SprinApplication(primarySource).run(args)`。它先通过调用`SpringApplication`类的构造方法，创建了`SpringApplication`类的实例，然后，调用所创建实例的run方法。

​	我们先看一下`SpringApplication`的构造函数

```java
public class SpringApplication{
	public SpringApplication(Class<?>... primarySources) {
		this(null, primarySources);
	}
	
	public SpringApplication(ResourceLoader resourceLoader, Class<?>... primarySources) {
		this.resourceLoader = resourceLoader;
		Assert.notNull(primarySources, "PrimarySources must not be null");
		this.primarySources = new LinkedHashSet<>(Arrays.asList(primarySources));<1>
		this.webApplicationType = WebApplicationType.deduceFromClasspath();<2>
		setInitializers((Collection) getSpringFactoriesInstances(ApplicationContextInitializer.class));<3>
		setListeners((Collection) getSpringFactoriesInstances(ApplicationListener.class));<4>
		this.mainApplicationClass = deduceMainApplicationClass();<5>
	}
}
```

创建`SpringApplication`实例实际上调用的是下面一个构造函数，这个构造函数，干了下面几件事：

> <1> 接收主配置类`primarySource`，初始化`SpringApplication`对象的`pramarySource`属性。
>
> <2> 推断web应用类型，初始化`webApplicationType`属性。
>
> <3> 加载spring应用上下文初始化器。
>
> <4> 加载spring应用上下文监听器。
>
> <5> 推断应用的引导类，初始化`mainApplicationClass`属性

接下来，我会详细说明这几步。

## 理解SpringApplication主配置类

​	主配置类有个特点，都是标注了`@EnableAutoConfiguration`或者`@SpringbootApplication`注解，其实`@SpringbootApplication`注解的元注解包含了`@EnableAutoConfiguration`注解，所以，本质上，主配置类是标注有`@EnableAutoConfiguration`的注解。

​	<font color=red>那么，@EnableAutoConfiguration注解的作用是什么呢？</font>

> 实际上，`@EnableAutoConfiguration`注解可以激活springBoot内建和自定义组件的自动装配特性。

​	我们注意到，main()方法中将`DemoApplication.class`作为`SpringApplication#SpringApplication(Class... primarySource)`中`primarySource`的参数，这里的`pramarySource`其实是SpringBoot应用上下文的配置类。这个配置类其实不一定要用引导类`DemoApplication.class`，使用带有`@EnableAutoConfiguration`的类都可以作为上下文配置类。

## 推断web应用类型

​	推断web应用类型在初始化阶段构造`SpringApplication`实例的过程中进行，当然，在`SpringApplication`实例构造后，`run()`方法执行前，还可以通过`setWebApplicationType()`方法调整。推断web应用类型实现方法是：检查当前`ClassLoader`下基准类的存在性判断。

​	在`SpringApplication`的构造方法中，`webApplicationType`的获取方式是：

```java
this.webApplicationType = WebApplicationType.deduceFromClasspath();
```

进入`deduceFromClasspath()`

```java
static WebApplicationType deduceFromClasspath() {
    	//DispatcherHandler存在，DispatcherServlet和ServletContainer不存在
		if (ClassUtils.isPresent(WEBFLUX_INDICATOR_CLASS, null) && !ClassUtils.isPresent(WEBMVC_INDICATOR_CLASS, null)
				&& !ClassUtils.isPresent(JERSEY_INDICATOR_CLASS, null)) {
			return WebApplicationType.REACTIVE;
		}
		for (String className : SERVLET_INDICATOR_CLASSES) {
            //Servlet和ConfigurableApplicationContext都不存在
			if (!ClassUtils.isPresent(className, null)) {
				return WebApplicationType.NONE;
			}
		}
		return WebApplicationType.SERVLET;
	}
```

这个方法主要利用`ClassUtils.isPresetn()`判断`DispatcherHandler`、`DispatcherServlet`、`ServletContainer`、`Servlet`、`ConfigurableWebApplicationContext`存在性组合情况，判断web应用类型。

## 加载Spring应用上下文初始化器

这个过程包含两个动作：

> 1. 通过`getSpringFactoriesInstance(Class)`获取各个`Initializers`实例。
> 2. 通过`setInitializer(Collection)`初始化`initializers`。

```java
setInitializers((Collection) getSpringFactoriesInstances(ApplicationContextInitializer.class));
```

进入`getSpringFactoriesInstances()`方法：

```java
public class SpringApplication {
    private <T> Collection<T> getSpringFactoriesInstances(Class<T> type) {
		return getSpringFactoriesInstances(type, new Class<?>[] {});
	}

	private <T> Collection<T> getSpringFactoriesInstances(Class<T> type, Class<?>[] parameterTypes, Object... args) {
		ClassLoader classLoader = getClassLoader();
		// Use names and ensure unique to protect against duplicates
		Set<String> names = new LinkedHashSet<>(SpringFactoriesLoader.loadFactoryNames(type, classLoader)); <1>
		List<T> instances = createSpringFactoriesInstances(type, parameterTypes, classLoader, args, names); <2>
		AnnotationAwareOrderComparator.sort(instances); <3>
		return instances;
	}
}
```

> <1> spring的工厂加载器会加载`META-INF/spring.factories`中配置的`ApplicationContextInitializer`的所有实现类名单。并将它们保存到集合Set中。
>
> <2> 根据获取到的实现类的名单，创建所有实现类的实例。
>
> <3> 对实例进行排序

其中，根据获取到的实现类创建实例的源代码如下：

```java
private <T> List<T> createSpringFactoriesInstances(Class<T> type, Class<?>[] parameterTypes,
			ClassLoader classLoader, Object[] args, Set<String> names) {
		List<T> instances = new ArrayList<>(names.size());
		for (String name : names) {
			try {
				Class<?> instanceClass = ClassUtils.forName(name, classLoader);
				Assert.isAssignable(type, instanceClass);
				Constructor<?> constructor = instanceClass.getDeclaredConstructor(parameterTypes);
				T instance = (T) BeanUtils.instantiateClass(constructor, args);
				instances.add(instance);
			}
			catch (Throwable ex) {
				throw new IllegalArgumentException("Cannot instantiate " + type + " : " + name, ex);
			}
		}
		return instances;
	}
```

> 遍历所有实现类，利用反射，拿到每个实现类的构造函数，然后，利用BeanUtils.instantiateClass()方法创建实例，将每个实例放入List中，将List返回。

## 加载Spring应用事件监听器

加载事件监听器的过程和加载应用上下文初始化器的过程基本一致。只不过，初始化的对象类型从`ApplicationContextInitializer`变成了`ApplicationListener`。

## 推断应用引导类

构造过程的末尾动作，它执行的是：`deduceMainApplicationClass()`

```java
private Class<?> deduceMainApplicationClass() {
		try {
			StackTraceElement[] stackTrace = new RuntimeException().getStackTrace();
			for (StackTraceElement stackTraceElement : stackTrace) {
				if ("main".equals(stackTraceElement.getMethodName())) {
					return Class.forName(stackTraceElement.getClassName());
				}
			}
		}
		catch (ClassNotFoundException ex) {
			// Swallow and continue
		}
		return null;
	}
```

> 主要思想是：获取线程执行栈，进行遍历，判断栈中哪个类包含main方法

## 小结

至此，在`SpringApplication`的构造过程中，`SpringApplication`的属性`primarySource`、`webApplicationType`、`initializers`，`listeners`、`mainApplicaitonClass`都得到了初始化。

