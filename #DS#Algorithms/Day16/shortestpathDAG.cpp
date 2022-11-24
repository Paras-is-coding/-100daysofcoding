#include<iostream>
#include<bits/stdc++.h>
using namespace std;

void findToposort(int node,int vis[],stack<int> st,vector<pair<int,int>> adj[]){
    vis[node] = 1;
    for(auto it: adj[node]){
        if(!vis[it.first]){
            findToposort(it.first,vis,st,adj);
        }
    }
    st.push(node);
}


void shortestPath(int src,int n,vector<pair<int,int>> adj[]){
    int vis[n] = {0};
    stack<int> st;
    for(int i=0;i<n;i++){
        if(!vis[i]){
            findToposort(i,vis,st,adj);
        }
    }

    int dis[n];
    for(int i=0;i<n;i++){
        dis[i] = INT_MAX;
    }
    dis[src] =0;
    while(!st.empty()){
        int node = st.top();
        st.pop();

    //if the node has been visited previously
        if(dis[node] != INT_MAX){
            for(auto it: adj[node]){
                if(dis[node] +it.second < dis[it.first]){
                    dis[it.first] = dis[node] + it.second;
                }
            }
        }
    }
    for(int i=0;i<n;i++){
        if(dis[i] == INT_MAX){
            cout<<"unreachable"<<endl;
        }
        else{
            cout <<"Distance from "<<src<<" to "<<i <<" is "<<dis[i]<<endl;
        }
    }

}
int main()
{
    int n,e;
    vector<pair<int,int>> adj[n];

    for(int i=1; i<=e;i++){
        int u,v,wt;
        cin>>u>>v>>wt;
        adj[u].push_back({v,wt});
    }

    shortestPath(0,n,adj);
    return 0;
}