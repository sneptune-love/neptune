


# JS相关信息

## performance

### performance.mark

> ```mark()``` 方法在浏览器的性能缓冲区中使用给定名称添加一个timestamp(时间戳)

<b>语法：</b>

```js
performance.mark(name);
```

### performance.measure

> ```measure()``` 方法在浏览器性能记录缓存中创建了一个名为时间戳的记录来记录两个特殊标志位（通常称为开始标志和结束标志）。 被命名的时间戳称为一次测量（measure）

<b>语法：</b>

```js
performance.measure(name, startMark, endMark);
```

### performance.clearMarks

> ```clearMarks()``` 这个方法可以从浏览器的performance entry 缓存中移除声明的标记。如果调用这个方法时没有传递参数， 则所有带有entry type这类标记的performance entries 将从 performance entry 缓存区中被移除。

<b>语法：</b>

```js
performance.clearMarks();

performance.clearMarks(name);
```

### performance.clearMeasures

> ```clearMeasures()``` 方法可以从浏览器的性能入口缓存区中移除声明的度量衡。如果这个方法被调用时没有传入参数，则所有 entry type 标记值为"measure" 的性能实体将被从性能入口缓存区中移除。

<b>语法：</b>

```js
performance.clearMeasures();

performance.clearMeasures(name);
```





