
# CRA Olivier[OPE]

Voici le projet concernannt la saisie des CRAs des agents.

choix technique: Material/TailwindCss/NgrxSignalStore/NX

À noter que 

- La gestion d'état utilise NGRX Signal Store au niveau des composants, et non NGRX Redux au niveau de l'application, car cela aurait été un peu over kill pour ce projet.
- L'UI est très basique, réalisée avec Material et TailwindCSS pour rester classique. L'UI pourrait être grandement améliorée !
- Le principe KISS a été suivi.
- OnPush change detection for all components
- Pas persistance des données (même pas en locaStorage!) 
- Le projet aurait pu être beaucoup plus générique et avec bien plus de règles de gestions. J'ai collé aux 'specs' :) Seul le nombe d'agents a été rendu 'générique' et non pas forcément seulement au nombre de 3. 
- Utilisation du datepicker d'Angular Material pour la gestion du calendrier et non d'une librairie JS spécifique de calendar. C'est pas le choix le plus user friendly mais ça fonctionne. Une lib tièrce pour gérer les calendriers aurait facilité l'UI/UX mais y'a le sujet des licences... 
- utilisation de NX, projet mono repo, avec juste 1 lib 'CRA'.

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve angular-monorepo
```


To run unit tests aginst CRA library, use:

```sh
npx nx run cra:test
```
 

To see all available targets to run for a project, run:

```sh
npx nx show project angular-monorepo
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)



## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
