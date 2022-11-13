// topological sorting is linear ordering of vertices such that
//if there is an edge u->v then u is before v in that list

#include<iostream>
#include<bits/stdc++.h>
using namespace std;

void findTopo(int node, vector<int> &vis, stack<int> &st,vector<int>adj[]){
    vis[node] =1;

    for(auto it: adj[node]){
        if(!vis[it]){
            findTopo(it,vis,st,adj);
        }
    }
    st.push(node); //backtracking
}

vector<int> toposort(int n,vector<int> adj[]){
    vector<int> vis(n,0);
    stack<int> st;

    for(int i=0; i<n;i++){
        if(!vis[i]){
                findTopo(i,vis,st,adj);
        }
    }
    vector<int> topo;
    while(!st.empty()){
        topo.push_back(st.top());
        st.pop();
    }
    return topo;
}
int main()
{
    int n,e;
    cin>>n>>e;

    vector<int> adj[n];

    for(int i=1;i<e; i++){
        cout<<"Enter egde"<<i<<endl;
        int u,v;
        cin>>u>>v;
    }
    vector<int> topo;
    topo = toposort(n,adj);
    for(int i=0;i<n;i++){
        cout<<topo[i];
    }
    return 0;
}