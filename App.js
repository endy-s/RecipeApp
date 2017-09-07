import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Title from './src/components/title'
import RecipeCard from './src/components/recipe-card'

export default class App extends React.Component {
  state = {
    title: "Hello",

    recipes: [
      {
        id: 1,
        picture: "https://ih1.redbubble.net/image.240262109.3755/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1.jpg",
        title: "Doggo Diving",
        preparation_time: 100,
      },
      {
        id: 2,
        picture: "https://ih1.redbubble.net/image.240262109.3755/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1.jpg",
        title: "Macarraomuitodobomtudojunto2",
        preparation_time: 200,
      },
      {
        id: 3,
        picture: "https://ih1.redbubble.net/image.240262109.3755/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1.jpg",
        title: "Doggo Diving 3",
        preparation_time: 300,
      },
      {
        id: 4,
        picture: "https://ih1.redbubble.net/image.240262109.3755/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1.jpg",
        title: "Doggo Diving 4",
        preparation_time: 400,
      },
      {
        id: 5,
        picture: "https://ih1.redbubble.net/image.240262109.3755/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1.jpg",
        title: "Doggo Diving 5",
        preparation_time: 500,
      },
    ],
  }


  renderRecipes(recipes) {
    return (
      recipes.map( (recipe) =>{
        return (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            picture={recipe.picture}
            preparationTime={recipe.preparation_time}
          />
        )
      })
    )
  }

  render() {
    const { recipes } = this.state

    const viewRecipes = recipes.map( (recipe) => {
      const view = (
      <View>
        <Text>{recipe.title}</Text>
        <Image style={ { width:50, height:50 } } source={{uri: recipe.picture}}/>
      </View>
    )

    return view
  })

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.helloWorldStyle}>{this.state.title}</Text>
        <Title value="Endy :)" name="Hello">Tested</Title>
        <Title value="Nice!" name="Bye">{42}</Title>

        <Text>Receitas</Text>

        <View style={styles.recipesContainer}>
          {this.renderRecipes(this.state.recipes)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    paddingTop: 30,
  },
  helloWorldStyle: {
    color: "#F00"
  },
  recipesContainer: {
    flex: 1,
    backgroundColor: "white"
  },
});
