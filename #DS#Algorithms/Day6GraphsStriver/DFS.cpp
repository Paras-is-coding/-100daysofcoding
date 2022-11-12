#include<iostream>
#include<bits/stdc++.h>
using namespace std;
//keep going until adjacent unvisited node is there
class solution{
    private:
    void dfs(int node,vector<int> adj[],int vis[],vector<int> &ls){
        vis[node]=1;
        ls.push_back(node);

        //traverse all its neighbour
        for(auto it: adj[node]){
            if(!vis[it]){
                dfs(it,adj,vis,ls);
            }
        }
    }
    public:
    vector<int> dfsofGraph(int v, vector<int> adj[]){
        int start = 1;
        int vis[v+1] ={0};
        vector<int> ls;
        dfs(start,adj,vis,ls);

        return ls;
    }
};

int main()
{
    //taking graph input as adjacency matrix
    int n,e;
    cout<<"Enter no of vertices and edges"<<endl;
    cin>>n>>e;

    vector<int> adj[n];
for(int i=0;i<e;i++){
    int u,v;
    cout<<"Enter edge"<<i+1<<endl;
    cin>>u>>v;
    adj[u].push_back(v);
    adj[v].push_back(u);
}

solution g;
vector<int> ls = g.dfsofGraph(n,adj);
for(auto it : ls){
    cout<<ls[it]<<" ";
}
    return 0;
}