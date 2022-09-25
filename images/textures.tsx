import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'


import {
    dirtImg,
    logImg,
    grassImg,
    glassImg,
    woodImg
} from './images'

const dirtTexture = new TextureLoader().load('./dirt.jpg')
const logTexture = new TextureLoader().load('./log.jpg')
const grassTexture = new TextureLoader().load('./grass.jpg')
const glassTexture = new TextureLoader().load('./glass.png')
const woodTexture = new TextureLoader().load('./wood.png')
const groundTexture = new TextureLoader().load('./grass.jpg')

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export default {
    dirtTexture,
    logTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    groundTexture
}