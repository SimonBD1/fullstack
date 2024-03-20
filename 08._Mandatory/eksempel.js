function genericActionPerfomer(name, genericAction){
    return genericAction(name)
}
const running = (name) => `${name} is running`;

const runningResult = genericActionPerfomer("alex", running)

