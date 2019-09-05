## 简单范例

### 交互式脚本

```markdown
$ touch test.sh && chmod +x test.sh
```

向test.sh写入内容：

```markdown
cat > test.sh <<EOF
#!/bin/bash

read -p "please input you name:" name  #提示用户输入
echo -e "Your name is: \$name"   # 结果由屏幕输出
EOF
```

### 数值运算

```markdown
cat > test.sh <<EOF
#!/bin/bash
num1=3
num2=2
total=\$((\$num1 * \$num2))
echo \$total
EOF
```

> <font color=red>注意：</font>
>
> 使用cat > <<EOF向文件中写入数据时，要将$转义

## script的执行方式区别

`./script或者sh script`方式，父进程bash会开辟一个子进程bash，脚本会在子进程bash环境下执行，脚本执行结束，子进程的bash内的所有数据会删除。

`source script`方式，脚本会在父进程中执行。

## test测试命令

某个文件名的文件类型判断：

| 测试的标志 | 代表意义                              |
| ---------- | ------------------------------------- |
| -e         | 文件名是否存在                        |
| -f         | 文件名是否存在，且为文件（file）      |
| -d         | 文件名是否存在，且为目录（directory） |
| -b         | 文件名是否存在，且为块设备            |
| -c         | 文件名是否存在，且为character设备     |
| -S         | 文件名是否存在，且为Socket文件        |
| -p         | 文件名是否存在，且为FIFO文件          |
| -L         | 文件名是否存在，且为连接文件          |

文件权限检测：

| 测试的标志 | 代表意义                           |
| ---------- | ---------------------------------- |
| -r         | 文件名是否存在，且有可读权限       |
| -w         | 文件名是否存在，且有可写权限       |
| -x         | 文件名是否存在，且有可执行权限     |
| -u         | 文件名是否存在，且有SUID属性       |
| -g         | 文件名是否存在，且有SGID属性       |
| -k         | 文件名是否存在，且有sticky bit权限 |
|            | 文件名是否存在，且为非空白文件     |

两个文件之间的比较：

| 测试标志 | 代表意义       |
| -------- | -------------- |
| -nt      | file1比file2新 |
| -ot      | file1比file2旧 |
| -ef      | 同一个文件     |

整数之间的比较：

| 测试的标志 | 代表意义   |
| ---------- | ---------- |
| -eq        | 两数值相等 |
| -ne        | 两数值不等 |
| -gt        | n1 > n2    |
| -lt        | n1 < n2    |
| -ge        | n1 >= n2   |
| -le        | n1 <= n2   |

判定字符串：

| 测试的标志 | 代表意义                  |
| ---------- | ------------------------- |
| -z         | 字符串是否为0，空串为true |
| -n         | 字符串不为0，空串false    |
| =          | 字符串相等                |
| !=         | 字符串不相等              |

多重条件：

| 测试标志 | 代表意义                                                     |
| -------- | ------------------------------------------------------------ |
| -a       | 两个条件同时成立，test -r file -a -w file ，file同时具有可读可写权限 |
| -o       | 任何条件成立，test -r file -o -w file ，file具有可读或可写权限 |
| ！       | 反向状态                                                     |

## 判断符合[]

例如：

```markdown
$ [ -z "$HOME"] ; echo $?
```

> <font color=red>使用注意：</font>
>
> 1. 中括号内的每个组件都需要用空格隔开，目的：防止和正则通配冲突
> 2. 中括号内的变量，最好用双引号或括号括起来
> 3. 中括号内的常量，最好以单或双引号括起来

## Shell Script默认变量（$0,$1...）

```markdown
$ command opt1, opt2, opt3...
   $0      $1    $2     $3
```

script内可以调用的特殊变量：

- $#：代表命令后面接的参数个数
- $@：代表"$1", "$2", "$3"之意，每个变量独立（用双引号括起来）
- $*：代表“$1c$2c$3c$4”，c为分隔符，默认为空格，本例代表"$1 $2 $3 $4"

使用示例：

```bash
#!/bin/bash
echo "The script name is : $0"
echo "The parameter number is : $#"
[ "$#" -lt 2 ] && echo "The parameter number is less than 2. stop here." && exit 0
echo "Your whole parameter is: $@"
echo "Your first parameter is: $1"
```

测试执行：

```markdown
[root@ygtao ~]# ./test1.sh 2 4 6
The script name is : ./test1.sh
The parameter number is : 3
Your whole parameter is: 2 4 6
Your first parameter is: 2
```

### shift变量偏移

```bash
//输入的变量1,2,3,4,5
shift  #变量为2,3,4,5
shift 3 #变量为4,5
```

## 条件判断

### if...then

<font color=red>单层、简单条件判断式：</font>

```markdown
if [ 条件表达式 ]; then
	条件成立，执行命令
fi
```



```markdown
#!/bin/bash
read -p "input (y/N):" temp
if [ "$temp" == "y" ] || [ "$temp" == "Y" ]; then
	echo "Ok,continue"
	exit 0
fi
```

<font color=red>多重、复杂条件判断式：</font>

```markdown
if [ 条件判断式 ]; then
	条件成立，执行内容
else
	条件不成立，执行内容
fi
```

```markdown
if [ 条件判断式 ]; then 
	条件成立，执行内容
elif [ 条件判断2 ]; then
	条件2成立，执行内容
else 
	上述条件均不成立，执行内容
fi
```

### case...in

```markdown
case $变量名 in 
	"第一个变量内容")
		程序段
		;;
	"第二个变量内容")
		程序段
		;;
	*)
	exit 1
	;;
esac
```

使用示例：

```markdown
#!/bin/bash
case $1 in 
	"hello")
		echo "$1, how are you?"
		;;
	"")
		echo "you must input a parameter. ex> {$0 someword}"
		;;
	*)
		echo "Usage $0 {hello}"
		;;
esac
```

## 函数function

shell script执行方式是由上而下、从左而右，function的设置一定要在程序最前面，否则找不到程序段。

```markdown
function fname() {
	程序段
}
```

> 注意：
>
> 1. 在函数中也可以使用$1,$2...，这个$1,$2是基于函数参数的，和shell script的$1,$2不同

## 循环

### while...do...done

```markdown
while [ condition ] 
do
	程序段
done
```

使用示例：

```markdown
#!/bin/bash
while [ "$temp" != "yes" -a "$temp" != "YES"] 
do
 read -p "please input yes/YES to stop the program." temp
done
echo "OK!,you input the correct answer"
```

### until...do...done

```markdown
until [ condition ]
do
  程序段落
done
```

使用示例：

```markdown
#!/bin/bash
until [ "$temp" == "yes" -o "$temp" == "YES" ]
do
 read -p "please input yes/YES to stop the program." temp
done
echo "OK!,you input the correct answer"
```

### for...do...done

<font color=red>写法1：</font>

```markdown
for var in con1 con2 con3
do 
	程序段
done
```

> 其中：
>
> 第一次循环，$var内容为con1
>
> 第二次循环，$var内容为con2
>
> 第三次循环，$var内容为con3

使用示例：

```markdown
#!/bin/bash
users=$(cut -d ":" -f1 /etc/passwd)
echo $users
for username in $users
do
 id $username
 echo $id
done

//连续数字，从1到100
for num in $(seq 1 100)
...
```

<font color=red>写法2：</font>

```markdown
for (( 初始值； 限制条件； 执行步长 ))
do 
	程序段
done
```

使用示例：

```markdown
#!/bin/bash
s=0
for ((i=1; i<=10; i=i+1))
do
 s=$(($s + $i))
done
echo $s
```

## shell script追踪调试

```markdown
sh [-nxv] scripts.sh
```

> 其中：
>
> -n：不执行脚本，仅检查语法问题
>
> -v：执行脚本前，先将脚本内容输出到屏幕上
>
> -x：使用导的脚本内容显示到屏幕上