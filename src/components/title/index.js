import React, {PropTypes} from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Title extends React.Component {
    static PropTypes = {
        children: PropTypes.string.isRequired,
    }

    static defaultProps = {
            children: "Children not defined"
    }

    componentWillReceiveProps(nextProps) {
        console.log("Testing this console \n")
        console.log(nextProps)
    }

    render() {

        console.log("-- Received this props: ", this.props)

        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{this.props.value} {this.props.children}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 40,
        backgroundColor: "blue",
    },
    titleStyle: {
        fontSize: 24,
        color: "white",
    },
})


export default Title