---
id: cc56d692c51a4872b4f78b024c468e4b
database: true
---
# Reading list

```database
views:
  - type: table
    name: Table
    order:
      - title
      - author
      - status
  - type: gantt
    name: Reading time
    date: started
    end: finished
    dependsOn: after
properties:
  after:
    relation: { target: "[[Reading list]]" }
```
