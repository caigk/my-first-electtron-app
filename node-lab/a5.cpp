# include<iostream>
using namespace std;
int main()
{
	long long sum,zero=1,one=0,ok=0;
	int n;
	cin>>n;
	for(int i=1;i<=n;i++)
	{
		ok=one;
		one=zero;
		zero=ok*2;
	}
	sum=zero+one+ok;
	cout<<sum;
	return 0;
}