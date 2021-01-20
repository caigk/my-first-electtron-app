 # include<iostream>
using namespace std;

int main()
{
	unsigned long long sum,zero=1,one=0,ok=0;
	int n;

	cout<<"请输入月份："<<endl;
	cin>>n;

	
	for(int i=1;i<=n;i++)
    {
		ok=one+ok;
		one=zero;
		zero=ok*2;
		sum=zero+one+ok;
		if( i>3 && (zero<ok || sum<zero))
		{
			cout<<"溢出"<<endl;
			return 1;
		}
		
		cout<<"i="<<i<<" zero="<<zero<<" one="<<one<<" ok="<<ok<<endl;

		

	}
	
	cout<<"兔子总数："<<sum<<endl;

	printf ("max unsigned int = %u\n", (unsigned int)(pow(2, 32) - 1));
	printf ("max unsigned long long = %llu\n", ULLONG_MAX);
	return 0;
}
