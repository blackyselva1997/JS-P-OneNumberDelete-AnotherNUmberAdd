let number=[1,2,3,4,5,6];
for (i=0; i< number.length; i++) {
	number[i]=number[i+1];
}
document.write(number);