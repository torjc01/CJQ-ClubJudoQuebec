# Répose aux questions du travail du RAC 

## 1. Les outils et langages 

Le paradigme le plus moderne en termes de programmation d'applications web nous indique que l'utilisation du cloud comme plateforme de déploiement est la plus adaptée aux critères de 

Containerisation - > Cloud - docker, orquestration avec docker-compose, possibilité de convertir compose em kubernetes et déploiement sur kubernetes. 

Node.js 

Angular - Typescript

Base de données: MySQL 

## 2. Analyse 

### Produits similaires 

Comme base de comparaison, j'ai cheché sur internet les pages web de plusieurs clubs de Judo dans la grande région de la ville de Québec. Cette recherche a fourni les éléments de base 

### Divisions logiques 

container frontend application

container API acces aux données

container base de données 

### Nature des données 

Les données 

### Traitements impliqués

### Façons de faire 

## 3. Programmation

## 4. Stratégie de déploiement

(critéres d'e'val pour le choix de la stratégie; outils compte utiliser; mesure de securité a apliquer; préparation des données et fichiers nécessaires; 
critéres de validation). 


### Sécurité

Le site du CJQ présente différentes couches de visibilité, selon le type d'usager du site. 

La plupart du site web est de visibilité publique, avec le but d'informer le grand publique sur la culture liée au Judo; sur le club, les entraîneurs, les modalités pratiquées. Tout cet éventail d'information est disponible à tout usager qui se rend sur la page, sans aucune restriction ni vérification d'accès. 

La prochaine couche d'acèss est celle controlée pour les membres du club. Dès le moment où l'élève fait son insctription au club, ou quand il décide de faire son inscription en ligne, il peut créer son prfil de membre et l'utiliser pour accèder à des informations sur lui même, ses inscriptions aux équipes de compétition, demandes diverses, etc. 

Finalement, la couche d'accès la plus restrieinte est celle de la gestion. Elle est accessible seulement aux employés et administrateurs du Club de Judo. Dans la couche de gestion, les usagers peuvent faire l'administration du site, comme la gestion des membres, des cours, des horaires, des inscriptions aux compétitions pour le club, la gestion des paiements, etc. 

Pour les couches de membres et de gestion, le contrôle de sécurité est fait par la vérification de credentiales de sécurité; dans un premier moment, on vérifie le pair nom d'usager/mot de passe. Ultérieurment, on pourra faire la vérification de l'identité numérique ave l'utilisation de Verifiable Credentials. 