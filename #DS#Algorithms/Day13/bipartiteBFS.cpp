#include <iostream>
#include <bits/stdc++.h>
using namespace std;

bool bipartiteBFS(int node, vector<int> adj[], int color[])
{
    queue<int> q;
    q.push(node);
    color[node] = 1;

    while (!q.empty())
    {
        int element = q.front();
        q.pop();

        for (auto it : adj[element])
        {
            if (color[it] == -1)
            {
                color[it] = 1 - color[element];
                q.push(it);
            }
            else if (color[it] == color[element])
            {
                return false;
            }
        }
    }
    return true;
}

bool checkBipartite(vector<int> adj[], int n)
{
    int color[n];
    memset(color, -1, sizeof(color));

    for (int i = 0; i < n; i++)
    {
        if (color[i] == -1)
        {
            if (!bipartiteBFS(i, adj, color))
            {
                return false;
            }
        }
    }
    return true;
}

int main()
{
    int n, e;
    cin >> n >> e;
    vector<int> adj[n];
    
    for (int i = 0; i < e; i++)
    {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    
    if (checkBipartite(adj, n))
    {
        cout << "YES" << endl;
    }
    else
    {
        cout << "NO" << endl;
    }
    return 0;
}