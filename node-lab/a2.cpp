#include<iostream>
using namespace std;
int main()
{
	int sum=0,max=0,min=1001;
	int score;
	int n;
	cout<<"请输入评委数n"<<endl;
	cin>>n;
	if(10000<n||n<=0)
	{
		cout<<"请输入合法的n值，0<n<10000"<<endl;
		return 0;
	}
	cout<<"请输入分数,用空格隔开"<<endl;
	for(int i=0;i<n;i++)
	{
		cin>>score;
		if(score<=0||score>=1000)
		{
			cout<<"请输入合法的分数"<<endl;
			return 0;
		}
		cout<<"成绩： "<<score<<endl;
		if(score>max)max=score;
		if(score<min)min=score;
		sum=sum+score;
		cout<<"sum："<<sum<<endl;
	}
	sum=sum-max-min;

	cout<<"最终成绩是: "<<sum<<endl;
	return 0;

}