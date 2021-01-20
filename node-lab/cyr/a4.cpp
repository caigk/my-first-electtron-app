# include<iostream>
using namespace std;
int main()
{
	int a,b,sum;
	cout<<"请输入a，b"<<endl;
	cin>>a>>b;
	if(a<0||b<0)
	{
		cout<<"请输入合法a，b"<<endl;
		return 0;
	}
	sum=a+b;
	cout<<"和为"<<sum<<endl;
	if(sum>2)
	{
		bool isSS=true；
		for(int i=2;i<sum;i++)
		{
			if(sum%i==0)
			     {
					 cout<<"结果不是素数"<<endl;
					 isSS=false；
					 break;
				 }
			
		}
		if(isSS)
		   cout<<"结果为素数"<<endl;
	}
	else
	     cout<<"结果为素数"<<endl;
	return 0;
}
	