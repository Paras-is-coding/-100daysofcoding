//traverse the adjacent nodes first then move ahead
//1___ take a queue and a visited array 
//2___push initial node in queue and mark it as visited
//3___while queue is not empty -pop the front node and print it 
//        -push its adj in queue if they are not visited and mark them visited
//repeat those 3 steps for each component

//code
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

class solution{
    public:
    vector<int> bfsGraphTraversal(vector<int> adj[], int n){
        // initialize bfs array and visited array
        vector<int> bfs;
        vector<int> visited(n+1,0);

        //run bfs algo for each node to make sure traverse all components of graph
        for(int i=1; i<=n;i++){
            
            //if node not already visited ie new component run bfs
            if(!visited[i]){
                queue<int> q;
                q.push(i);
                visited[i] = 1;

                while(!q.empty()){
                    int node = q.front();
                    q.pop();
                    bfs.push_back(node);

                    for(auto it : adj[node]){
                        if(!visited[it]){
                            q.push(it);
                            visited[it] = 1;
                        }
                    }
                }
            }
        }

        return bfs;
    }
};

int main()
{
    //taking graph as input using adjacency list
    int V,E;
    cout<<"Enter no of vertices and edges : "<<endl;
    cin>>V>>E;

    vector<int> adj[V];

    for(int i=1;i<=E; i++){
        int u,v;
        cout<<"Enter vertex"<<i<<endl;
        cin>>u>>v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    solution obj;
    vector<int> a = obj.bfsGraphTraversal(adj,V);

    cout<<"The nodes of graph after bfs traversal are as: "<<endl;
    for(auto it : a){
        cout<<a[it]<<" ";
    }
    return 0;
}
