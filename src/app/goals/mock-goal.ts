import { Goal } from './goal-item/goal';

export const GOALS : Goal[] =[
    { id: 1, name: "Angular", description: "Angular framework", library: { links: ["https://www.tutorialspoint.com/typescript", "https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0", "https://www.typescriptlang.org/docs/handbook/"] } },
    { id: 2,  name: "Javascript", description: "Javascript language", library: {links:["https://www.javascript.com/", "https://www.codecademy.com/learn/introduction-to-javascript"]}},
    { id: 3,  name: "Entity Framework", description: "Entity Framework ORM", library: {links:["https://docs.microsoft.com/en-us/ef/core/", "http://www.entityframeworktutorial.net/efcore/entity-framework-core.aspx"]}},
    { id: 4,  name: "Azure", description: "Azure Cloud services", library: {links:["https://azure.microsoft.com/pl-pl/"]}}
]

