function Palindrome()
	{
		var rem, temp, final = 0;
		var Sayi = 131

		temp = Sayi;
		while(Sayi>0)
		{
			rem = Sayi%10;
			Sayi = parseInt(Sayi/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			console.log("Girilen Sayı  Bir Plindrome Sayıdır.");
		}
		else
		{
			console.log("Girilen Sayı Bir Plindrome Sayısı Değildir.");
		}
    }
	Palindrome()
	