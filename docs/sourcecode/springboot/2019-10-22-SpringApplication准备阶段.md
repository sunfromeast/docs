`SpringApplication`的运行阶段属于核心过程，完整围绕`run(String...)`方法展开，这个阶段

> 1. 结合初始化阶段完成的状态，进一步完善运行时需要准备的资源
> 2. 随后，启动spring应用 上下文（该过程伴随springboot和spring时间的触发），形成完整声明周期

后面将围绕三个议题讨论

> - `SpringApplication`准备阶段
> - `SpringApplication`启动阶段
> - `SpringApplication`启动后阶段

# SpringApplication准备阶段

这个阶段是`ApplicationContext`启动的前一阶段，涉及的范围从`run(String...)`调用开始，到`refreshContext(ConfigurableApplicationContext)`调用前，我们看一下源码：

```java
public class SpringApplication {
    
    public ConfigurableApplicationContext run(String... args) {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		ConfigurableApplicationContext context = null;
		Collection<SpringBootExceptionReporter> exceptionReporters = new ArrayList<>();
		configureHeadlessProperty();
		SpringApplicationRunListeners listeners = getRunListeners(args);
		listeners.starting();
		try {
			ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
			ConfigurableEnvironment environment = prepareEnvironment(listeners, applicationArguments);
			configureIgnoreBeanInfo(environment);
			Banner printedBanner = printBanner(environment);
			context = createApplicationContext();
			exceptionReporters = getSpringFactoriesInstances(SpringBootExceptionReporter.class,
					new Class[] { ConfigurableApplicationContext.class }, context);
			prepareContext(context, environment, listeners, applicationArguments, printedBanner);
			refreshContext(context);
			afterRefresh(context, applicationArguments);
			stopWatch.stop();
			if (this.logStartupInfo) {
				new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);
			}
			listeners.started(context);
			callRunners(context, applicationArguments);
		}
		catch (Throwable ex) {
			handleRunFailure(context, ex, exceptionReporters, listeners);
			throw new IllegalStateException(ex);
		}
}
```

这个过程涉及到的核心对象有：

> - `ApplicationArguments`
> - `SpringApplicationRunListeners`
> - `ConfigurableEnvironment`
> - `Banner`
> - `ConfigurableApplicationContext`
> - `SpringBootExceptionReporter`

后面，我们会对这几种对象进行详细说明。