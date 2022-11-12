#include<iostream>
#include<bits/stdc++.h>
using namespace std;

class solution{
    private:
    bool cycleCheck(int node,vector<int> adj[],vector<int>&vis,vector<int> &dfsvis){
        vis[node] = 1;
        dfsvis[node] = 1;

        for(auto it: adj[node]){
            if(!vis[it]){
                if(cycleCheck(it,adj,vis,dfsvis)){
                return true;
            }
            }
            else if(dfsvis[it]){
                return true;
            }

        }
        dfsvis[node]= 0;
        return false;
    }
    public:
    bool isCycle(int v,vector<int> adj[]){
        vector<int> vis(v+1,0);
        vector<int> dfsvis(v+1,0);

        for(int i=1; i<=v; i++){
            if(!vis[i]){
                if(cycleCheck(i,adj,vis,dfsvis)){return true;}
            }
        }
        return false;
    }
};
int main()
{
    int v,e;
    cout<<"Enter vertices and edges no:"<<endl;
    cin>>v>>e;
    vector<int> adj[v+1];

    for(int i=1;i<=e;i++){
        cout<<"Enter edge"<<i<<endl;
        int u,v;
        cin>>u>>v;
        adj[u].push_back(u);
        adj[v].push_back(v);
    }

solution obj;
bool ans = obj.isCycle(v,adj);
if(ans == true){
    cout<<endl<<"true";
}

else{
    cout<<endl<<"false";
}


    return 0;
}