[![img](https://img.shields.io/badge/Lifecycle-Development-339999)](https://www.quebec.ca/gouv/politiques-orientations/vitrine-numeriqc/accompagnement-des-organismes-publics/demarche-conception-services-numeriques)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

---
[Version Française](README_fr_CA.md)
# CJQ-Club de Judo de Quebec

Implementation de site pour mandat du RAC.

Le Club de Judo de Québec désire se doter d'un site web pour afficher ses activités, donner des informations et prendre des inscriptions. Il vous demande d'effectuer l'analyse et le développement de ce site. 

Le club veut une page d'accueil à partir de laquelle les visiteurs pourront choisir l'option désirée (un peu comme les sites compétiteurs). Les choix possibles à partir de cette page d'accueil sont:  

* **Accueil:** page principale présentant l'information de base sur le Club; 
* **Cours:** cours offerts, coûts, horaires, et inscriptions en ligne; 
* **Ceinture:** information sur les ceintures; 
* **Compétition:** calendrier des compétitions, résultats et classements; 
* **Équipement:** liste du matériel, prix, achat en ligne; 
* **Gestion:** sert à la mise à jour des classements, inscriptions des équipes, etc, uniquement accessible aux gestionnaires du site. 

### Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

### Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain why the project exists.

## Getting Started / Commencer

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites / Pré-requis

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Example Use

Use the `manage` shell script to build, start, stop and destroy the application. 

On the first use, you will need to build the application: 
```
$ cd docker
$ ./manage build 
```

After the build is done, launch the application: 

```
$ ./manage start
```

Once the application's containers are up, you will find the following endpoints available: 


- **The frontend** (http://localhost:8002)

- **The database admin page** (http://localhost:8888)

- **The API** (http://localhost:8001/api)

- **The API docs** (http://localhost:8001/api-docs)

To stop the application, and keep the containers ready on your docker, simply make a `stop`: 

```
$ ./manage stop
```

On the other hand, if you want to destroy the containers, you must do a `down` or `rm` (they are equivalent): 

```
$ ./manage down
```


Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## API Reference

The API documentation for the project is available at the address [Swagger OpenAPI](http://localhost:8001/api-docs/).

La documentation des APIs du projet sont disponibles à l'adresse du [Swagger OpenAPI](http://localhost:8001/api-docs/). 

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Ngrok](https://ngrok.com/) - Exposes local servers behind NATs and firewalls to the public internet over secure tunnels.
* [Angular](https://angular.io/) - AngularJS is a toolset for building a framework suited to application development. It is fully extensible and works well with other libraries.
* [MySQL](https://www.mysql.com/) - Open source relational database

## Contributing / Contribuer

Found a bug? Ready to submit a `PR`? Want to submit a proposal for your grand idea? Please read [CONTRIBUTING.md](https://github.com/torjc01/CJQ-ClubJudoQuebec/contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

Vous avez trouvé un bug? Êtes-vous prêt à soumettre un `PR`? Voulez-vous soumettre une proposition pour votre grande idée? Merci de lire [CONTRIBUTING.md](https://github.com/torjc01/CJQ-ClubJudoQuebec/contributing.md) pour des détails sur notre code de conduite, et le processus pour nous soumettre des `pull requests`. 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

Nous utilisons [SemVer](http://semver.org/) pour faire le versionement. Pour les versions disponibles, voir les [tags dans ce répo](https://github.com/torjc01/CJQ-ClubJudoQuebec/tags). 

## Authors / Auteurs 

* **Julio Cesar Torres** - *Initial work* - [torjc01](https://github.com/torjc01)

See also the list of [contributors](https://github.com/torjc01/CJQ-ClubJudoQuebec/contributors) who participated in this project.

Voyez aussi la liste de [contributeurs](https://github.com/torjc01/CJQ-ClubJudoQuebec/contributors) qui ont participé à ce projet. 

## License

The CJQ website is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details

Le site web du CJQ est licensé sous la license Apache 2.0 - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails. 


## Acknowledgements / Remerciements

* M Jean-François Savard, de m'avoir demandé cette implémentation. 
* Au Club de Judo de la Vieille Capitale, qui m'a accueilli lors de mon arrivé au Québec avec toute la convivialité de l'Art de la Voie de la Souplesse.
* To the site [Unsplash](https://unsplash.com/), for the high quality photos available for free to the developer community. 
* Hat tip to anyone whose code was used
* Inspiration
* etc

## References / Références 

* [Club de Taeknowdo CRSA](https://www.tkd-crsa.com/)
* [Taekwondo Ste-Foy](http://tkd-ste-foy.com/)
* [Club de Judo de la Vieille Capitale](https://www.judovieillecapitale.com/)