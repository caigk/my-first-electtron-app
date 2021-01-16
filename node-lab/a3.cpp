# include<iostream>
using namespace std;
int main()
{
	int a,b,c,sum;
	cout<<"请输入a，b，c："<<endl;
	cin>>a>>b>>c;
	if(a<=0||a>100||b<=0||b>100||c<=0||c>100)
	{
		cout<<"请输入正确a，b，c"<<endl;
		return 0;
	}
	for(int x=0;x<=c;x++)
	{
		int y;
		y=(c-x*a)/b;
		if(y>=0&&(x*a+y*b)==c)
		{
			sum=sum+1;
			cout<<"x="<<x<<" y="<<y<<endl;
		}
	}
	cout<<"解组数为："<<sum<<endl;
	return 0;
}