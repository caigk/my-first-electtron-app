# include<iostream>
using namespace std;

int main()
{
    int sum =0,score = 0,max = 0,min = 1001,n;

    while(cin>>score)
    {
        cout<<"成绩："<<score<<endl;

        if(score > max) 
            max = score;
        
        if(score < min)
            min = score;

        sum = sum + score;

        // 遇到回车符退出
        if ( '\n' == cin.get())
            break;
    }

    int result = sum - max -min;
    cout<<"去除最高分（"<<max<<"）"
        <<"和最低分（"<<min<<") "
        <<"最终总成绩为："<<result
        <<endl;

    return 0;
}

/*
g++ a.cpp
./a.out


请输入要计算的成绩(1-100)，用空格分开，回车结束输入(例:2 3 4 5\n)：
51 61 71 81 91 99   
成绩：51
成绩：61
成绩：71
成绩：81
成绩：91
成绩：99
去除最高分（99）和最低分（51) 最终总成绩为：304

*/