// Finding shortest path from source node to destination of a Undirected Graph using BFS
// Weight of edges is not given so considered as 1

#include<iostream>
#include<bits/stdc++.h>
using namespace std;


void shortestpathUGbfs(int source,int nodes,vector<int> adj[]){
    int distance[nodes];
    for(int i=0; i<nodes; i++){ 
        distance[i] = INT_MAX;
        }

    queue<int> q;
    distance[source] = 0;
    q.push(source);

    while (!q.empty())
    {
        int node = q.front();
        q.pop();

        for(auto it: adj[node]){
            if(distance[it] > distance[node] + 1){
                distance[it] = distance[node] +1;
                q.push(it);
            }

                     }
    
    }

    for(int i=0; i<nodes; i++){
        cout<<"Distance from node "<<source<<" to node "<<i<<" is "<<distance[i]<<endl;
    }   

  

}

int main(){
    int n,e;
    cin>>n>>e;

    vector<int> adj[n];

    for(int i=1; i<=e;i++){
        int u,v;
        cin>>u>>v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    shortestpathUGbfs(0,n,adj);

    return 0;

}
