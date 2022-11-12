#include<iostream>
using namespace std;

//normally searching an element in an array passing through each ele
int linearsearch(int arr[], int size,int element){
    for(int i=0; i<size; i++){
        if(arr[i] == element){
            return i;
        }
    }
    return -1;
}

int main()
{
    int arr[]= { 12,6,5,7,8};
    int i = linearsearch(arr,(sizeof(arr)/sizeof(arr[0])),5);

    if(i==-1){
        cout<<"The element is not found in the array.";
    }
    else{
        cout<<"The element is found at index "<<i<<".";
    }
    return 0;
}