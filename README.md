# 格格家管理后台基于and布局组件

* r1c1
    > 一行一列
    ```
    <R1C1 style={{color: #fefefe}}>斯蒂芬·库里<R1C1/> 
    ```

* r1cn
    > 一行n列，每列宽度按children数量平均分配
    ```
    <R1CN>
        <p>斯蒂芬·库里<p/>
        <p>追梦·格林<p/>
        <p>克莱·汤普森<p/>
    <R1CN/> 
    ```

* r1cc
    > 一行n列，自定义每列宽度
    ```
    <R1CC cols={[
        {span: 12},
        {span: 6},
        {span: 6},
    ]}>
        <p>斯蒂芬·库里<p/>
        <p>追梦·格林<p/>
        <p>克莱·汤普森<p/>
    <R1CC/> 
    ```

* groove
    > 段落间距，向下20px
    ```
    <Groove/>
    ```