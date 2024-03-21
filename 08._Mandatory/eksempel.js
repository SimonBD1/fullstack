function genericActionPerfomer(name, genericAction){
    return genericAction(name)
}
const running = (name) => `${name} is running`;

const runningResult = genericActionPerfomer("alex", running)


apiCall1((result1, error1) => {
    if (error1) {
      console.error('Fejl ved API-kald 1:', error1);
    } else {
      apiCall2(result1, (result2, error2) => {
        if (error2) {
          console.error('Fejl ved API-kald 2:', error2);
        } else {
          apiCall3(result2, (result3, error3) => {
            if (error3) {
              console.error('Fejl ved API-kald 3:', error3);
            } else {
              // Her behandles resultaterne fra alle tre API-opkald
            }
          });
        }
      });
    }
  });
  