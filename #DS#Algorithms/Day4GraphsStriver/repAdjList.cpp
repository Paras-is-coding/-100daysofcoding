#include<bits/stdc++.h>
#include<iostream>
using namespace std;
/*

// there are two ways of representing input (adjacency matrix and list)
//adj matrix has way more SC of n*n where as adj list has n+2*E
// here is adjacency matrix representation

int main()
{
    //taking no of nodes and edges as input
    int n,e;
    cin>>n>>e;

    int adj[n+1][n+1];//supposing indexing from 1 n*n size matrix

//taking edges as input and filling in matrix as 1
    for(int i=0; i<e; i++){
        int u,v; 
        cin>>u>>v;
        adj[u][v]=1;
        adj[v][u]=1;//undirected graph
    }

    return 0;
}

*/

// now the adjacency list representation
int main(){
    int n,e;
    cin>>n>>e;

    //creating array of vectors 
    vector<int> adj[n];
    // vector<list<int,int>> adj[n]; <-for weighted graph

    for(int i=0; i<e; i++){
        int u,v;
        cin>>u>>v;
        // adj[u].push_back({v,wt}); <-if graph is weighted
        adj[u].push_back(v);
        adj[v].push_back(u);//comment out this line if graph is directed
    }
    return 0;
}