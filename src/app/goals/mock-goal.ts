import { Goal } from './goal-item/goal';

export const GOALS : Goal[] =[
    { name: "Angular", description: "Angular framework", library: { links: ["https://www.tutorialspoint.com/typescript", "https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0", "https://www.typescriptlang.org/docs/handbook/"] } },
    { name: "Javascript", description: "Javascript language", library: {links:["https://www.javascript.com/", "https://www.codecademy.com/learn/introduction-to-javascript"]}},
    { name: "Entity Framework", description: "Entity Framework ORM", library: {links:["https://docs.microsoft.com/en-us/ef/core/", "http://www.entityframeworktutorial.net/efcore/entity-framework-core.aspx"]}},
    { name: "Azure", description: "Azure Cloud services", library: {links:["https://azure.microsoft.com/pl-pl/"]}}
]

