## Software Architecture: Case Study

> A case study for developing [Software Architecture](https://drive.google.com/file/d/1xM-lPAUOm37Q3ht6kgeQ97xelw0l5jj9/view?usp=sharing) to create a software which complies the important layers of abstraction.

### Pros
- Bussiness rules is not tightly coupled to any infrastructure. It is independent and easy to test.
- We can defer the choosing of infrastructure like web frameworks or database.
- Less cost. Adding more productivity.
- Easy to maintain.
- Open for extension but closed for modification. (OCP)
- Leads to better code.

### Cons
- Lots of code needs unlike in typical project.

### Setup for this sample project
- Install eslint globally.
- Install eslint for standard.
- Install standard, lint-staged, and husky to integrate git linting.

### Resources
- [SOLID Principle](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)
- [Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Hexagonal Architecture](https://dzone.com/articles/hexagonal-architecture-is-powerful)
- [Dependency Injection](https://blog.risingstack.com/dependency-injection-in-node-js/)
- [Building enterprise app with node express](https://stackoverflow.com/questions/41875617/building-enterprise-app-with-node-express)
- [Clean architecture and Hexagonal Architecture in node](https://solidgeargroup.com/clean-architecture-in-nodejs)
- [Implementing Clean architecture in node](https://medium.com/@dtinth/clean-javascript-using-use-case-interactors-f3a50c138154)
- [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

### Libraries and Repositories
- [Awlix](https://www.npmjs.com/package/awilix)
- [DDD/Clean Architecture inspired boilerplate for Node web APIs](https://github.com/joshuaalpuerto/node-ddd-boilerplate)
