#include<bits/stdc++.h>
#include<iostream>
using namespace std;

void addEdge(vector<int> adj[], int u, int v)
{
    adj[u].push_back(v);
    adj[v].push_back(u);
}


    bool checkForCycle(int s,int v,vector<int>adj[],vector<int>&visited){
        //create a queue for BFS
        queue<pair<int,int>> q;
        visited[s] = true;
        q.push({s,-1});

        while(!q.empty()){
            int node = q.front().first;
            int pre = q.front().second;
            q.pop();

            for(auto it: adj[node]){
                if(!visited[it]){
                    visited[it] = true;
                    q.push({it,node});
                }
                else if(pre != it){
                    return true;
                }
            }
        }
        return false;
    }
    
    bool isCycle(int v , vector<int> adj[]){
        vector<int> visited(v+1,0);

        for(int i=1; i<=v;i++){
            if(!visited[i]){
                if(checkForCycle(i,v,adj,visited))return true;
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