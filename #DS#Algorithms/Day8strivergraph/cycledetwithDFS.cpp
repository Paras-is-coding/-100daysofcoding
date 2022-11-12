#include<iostream>
#include<bits/stdc++.h>
using namespace std;
void addEdge(vector<int> adj[], int u, int v)
{
    adj[u].push_back(v);
    adj[v].push_back(u);
}


bool cycle(int node, int parent, vector<int> &vis,vector<int> adj[]){
    vis[node] = 1;
    for(auto it: adj[node]){
        if(vis[it] == 0){
            if(cycle(it,node,vis,adj)) return true;

        }else if(it != parent) return true;
    }
    return false;
}

bool isCycle(int v, vector<int>adj[]){
    vector<int> vis(v+1,0);
    for(int i=1; i<=v; i++){
        if(! vis[i]){
            if(cycle(i,-1,vis,adj)){
                return true;
            }
        }
    }
    return false;
}
int main()
{
    int V = 4;
    vector<int> adj[V];
    addEdge(adj, 0, 1);
    addEdge(adj, 1, 2);
    addEdge(adj, 2, 0);
    addEdge(adj, 2, 3);
 
    if (isCycle(V,adj))
        cout << "Yes";
    else
        cout << "No";
    return 0;
}