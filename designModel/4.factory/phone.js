class MobileFactory {
  createOS() {
    throw new Error('error');
  }
  createHardware() {
    throw new Error('error');
  }
}

class FakePhoneFactory extends MobileFactory {
  createOS() {
    return new AndroidOS();
  }
  createHardware() {
    return new QualcommHardware();
  }
}

class OS {
  controlHardware() {
    throw new Error('error');
  }
}

class AndroidOS extends OS {
  controlHardware() {
    console.log('android control hardware');
  }
}

class AppleOS extends OS {
  controlHardware() {
    console.log('apple control hardware');
  }
}

class Hardware {
  operateByOrder() {
    throw new Error('error');
  }
}
class QualcommHardware extends Hardware {
  operateByOrder() {
    console.log('gaotong');
  }
}
class AppleHardware extends Hardware {
  operateByOrder() {
    console.log('apple');
  }
}

const myPhone = new FakePhoneFactory();
const myOS = myPhone.createOS();
const myHardware = myPhone.createHardware();
myOS.controlHardware();
myHardware.operateByOrder();
