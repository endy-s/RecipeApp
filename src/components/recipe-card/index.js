import React, { PropTypes, Component} from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"

class RecipeCard extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        preparationTime: PropTypes.number.isRequired,
    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={{uri: this.props.picture}}/>
                <Text style={ styles.textStyle } numberOfLines={ 1 } ellipsizeMode="clip">{this.props.title}</Text>
            </View>
        )
    }
}

export default RecipeCard