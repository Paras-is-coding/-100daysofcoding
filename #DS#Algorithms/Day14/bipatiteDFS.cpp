//graph colouring check if graph is bipartite or not
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

bool checkBipartiteDFS(int node,int color[], vector<int> adj[]){
    if(color[node] == -1){
        color[node] = 1;
    }

    for(auto it: adj[node]){
        if(color[it] == -1){
            color[it] = 1 - color[node];
            if(!checkBipartiteDFS(it,color,adj)){return false;}
        }
        else if(color[it] == color[node]){
            return false;
        }
    }
    return true;
}


bool isBipartite(int n, vector<int> adj[]){
    int color[n];
    memset(color,-1,sizeof(color));

    for(int i=0;i<n; i++){
        if(color[i] == -1){
            if(!checkBipartiteDFS(i,color,adj)){
                return false; 
            }
        }
    }
    return true;
}

int main()
{
    int v,e;
    cin>>v>>e;

    vector<int> adj[v];

    for(int i=1; i<=e; i++){
        int u,v;
        cin>>u>>v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    if(!isBipartite(v,adj)){
        cout<<"NO"<<endl;
    }
    else{
        cout<<"YES"<<endl;
    }

    return 0;
}