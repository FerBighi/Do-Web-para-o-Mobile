import { Header } from "@react-navigation/elements";
import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

const noticias = () => {
  return (
    <ScrollView style={Styles.body} showsVerticalScrollIndicator={false}>
      <View style={Styles.header}>
        <View style={Styles.logoArea}>
          <View style={Styles.logo}>
            <Image
              source={require('../assets/images/logo.png')}
              style={Styles.logo}
            />
          </View>
        </View>

        <View style={Styles.menu}>
          <View style={Styles.eixo}>
            <Text>Notícias</Text>
            <Text>Tecnologia</Text>
            <Text>Entretenimento</Text>
            <Text>Esportes</Text>
          </View>
        </View>
      </View>


      <View style={Styles.noticias}>
        <Text style={Styles.veja}>
          Veja nossas notícias
        </Text>

        <View style={Styles.principal}>
          <Image
            source={require('../assets/images/principal.jpg')}
            style={Styles.imagemPrincipal}
          />
          <Text style={Styles.mainTitulo}>
            Após doação de SUGA, do BTS, hospital inaugura centro para pessoas com autismo
          </Text>
          <Text style={Styles.text}>
            O espaço, denominado Min Yoongi Treatment Center, oferece terapias especializadas, acompanhamento psicológico
            e atividades de musicoterapia. Além de viabilizar o projeto por meio de uma doação significativa, Suga também
            participou ativamente das atividades do centro, ministrando aulas de música para as crianças atendidas.
          </Text>
        </View>

        <View style={Styles.outras}>
          <View style={Styles.outra}>
            <Text style={Styles.outroText}>Taylor Swift anuncia série documental de 6 partes na Disney plus+</Text>
          </View>

          <View style={Styles.outra}>
            <Text style={Styles.outroText}>Lollapalooza 2025: fenômeno jovem, Olivia Rodrigo conquista fãs pela identificação</Text>
          </View>
        </View>
      </View>

      <View style={Styles.footer}>
        <View>
          <Text style={Styles.direitos}>© 2025 All Right Reserved By Maria Fernanda</Text>
        </View>

        <View>
          <Text style={Styles.direitos}>Termos de Uso Política de Privacidade</Text>
        </View>

        <View style={Styles.rodape}>
          <Image source={require('../assets/images/rodape.png')}
          style={Styles.imagemRodape} />
        </View>
      </View>

    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    backgroundColor: "#E6E1F4",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
  },

  logoArea: {
    marginBottom: 0.1,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  menu: {
    backgroundColor: "#7A6FBF",
    width: "100%",
    paddingVertical: 10,
  },

  eixo: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },

  menuTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  noticias: {
    padding: 20,
  },

  veja: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7A6FBF",
    marginBottom: 15,
  },

  principal: {
    backgroundColor: "#E6E1F4",
    padding: 18,
    borderRadius: 16,
    marginBottom: 25,
    elevation: 4,
  },

  imagemPrincipal: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },

  mainTitulo: {
    fontSize: 20,
    marginBottom: 8,
    color: "#4A4A4A",
    fontWeight: "bold",
  },

  text: {
    fontSize: 15,
    color: "#4A4A4A",
    lineHeight: 22,
  },

  outras: {
    marginTop: 10,
  },

  outra: {
    backgroundColor: "#E6E1F4",
    padding: 16,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 3,
  },

  outroText: {
    fontSize: 15,
    color: "#4A4A4A",
    fontWeight: "500",
  },

  footer: {
    backgroundColor: "#7A6FBF",
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 30,
  },

  direitos: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    marginVertical: 5,
  },

  rodape: {
    alignItems: "center",
    marginTop: 10,
  },

  imagemRodape: {
    width: 70,
    height: 35,
    resizeMode: "contain",
  },
});

export default noticias;