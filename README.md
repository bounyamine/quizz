# 📚 Quiz App

Une application de quiz interactive qui permet aux utilisateurs de tester leurs connaissances sur différentes catégories et niveaux de difficulté. Avec un design élégant et des fonctionnalités dynamiques, ce quiz vous offre une expérience amusante tout en suivant votre progression et vos scores.

## 🎨 Aperçu

L'application de quiz permet aux utilisateurs de choisir une catégorie, de définir le nombre de questions et de sélectionner un niveau de difficulté. Les questions sont tirées d'une API ouverte et présentent un mélange de réponses correctes et incorrectes. À la fin du quiz, les utilisateurs peuvent voir leur score final et leur meilleur score historique.

![Quiz App Screenshot](https://your-screenshot-url.com)

## 🚀 Fonctionnalités

- Sélection de catégories, de difficultés, et de nombre de questions.
- Interface utilisateur intuitive avec affichage du score et du meilleur score.
- Mélange aléatoire des réponses pour chaque question.
- Réponses correctes affichées en vert, mauvaises réponses en rouge.
- Suivi des scores avec une option de rejouer le quiz.
- Gestion du temps pour attribuer des points en fonction de la rapidité.
- Stockage du meilleur score en local (LocalStorage).

## 🛠️ Technologies

- **React.js** : pour la création de l'interface utilisateur dynamique.
- **CSS3** : pour le style et la mise en page.
- **Open Trivia DB API** : pour récupérer les questions du quiz.
- **LocalStorage** : pour sauvegarder le score le plus élevé.

## 📦 Installation

1. **Cloner le projet :**

   ```bash
   git clone https://github.com/bounyamine/quizz.git
   cd quizz
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Démarrer l'application :**

   ```bash
   npm start
   ```

4. **Accéder à l'application :**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📖 Utilisation

- Sur la page de configuration, sélectionnez la catégorie, la difficulté et le nombre de questions que vous souhaitez.
- Cliquez sur "Start Game" pour commencer le quiz.
- Choisissez une réponse parmi les options proposées. La réponse sélectionnée deviendra verte si elle est correcte, ou rouge sinon.
- À la fin du quiz, votre score sera affiché avec la possibilité de rejouer.
- Un suivi des scores est conservé pour afficher votre meilleur score.

## 🗂 Structure du projet

```
/public
  index.html              # Page HTML principale
/src
  App.css                 # Style de l'application principal
  App.js                  # Composant principal de l'application
  index.js                # Point d'entrée de React
  index.css               # Style des toutes les applications
```

## 🎥 Démo

Regardez une démo en direct de l'application [ici](https://your-demo-url.com) !

## 🤝 Contributions

Les contributions sont les bienvenues ! Si vous souhaitez améliorer cette application ou ajouter de nouvelles fonctionnalités, veuillez suivre ces étapes :

1. Fork le projet.
2. Créez une nouvelle branche (`git checkout -b feature/new-feature`).
3. Committez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez sur la branche (`git push origin feature/new-feature`).
5. Créez une Pull Request.

## 📄 Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.
