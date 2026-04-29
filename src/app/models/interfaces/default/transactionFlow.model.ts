export interface transactionFlowItem {
  addMoney: {
    header: {
      icon: string;
      text: string;
      button: string;
    };
    overview: {
      container1: string;
      container2: string;
      container3: string;
      button: string;
      buttonIcon: string;
    };
    action: {
      verb: string;
      prep1: string;
      prep2: string;
      icon: string;
    };
    validation: {
      loader: string;
      successful: {
        title: string;
        subtitle: string;
      };
      unsuccessful: {
        title: string;
        subtitle: string;
      };
    };
  };
  withdrawMoney: {
    header: {
      icon: string;
      text: string;
      button: string;
    };
    overview: {
      container1: string;
      container2: string;
      container3: string;
      button: string;
      buttonIcon: string;
    };
    action: {
      verb: string;
      prep1: string;
      prep2: string;
      icon: string;
    };
    validation: {
      loader: string;
      successful: {
        title: string;
        subtitle: string;
      };
      unsuccessful: {
        title: string;
        subtitle: string;
      };
    };
  };
  transferMoney: {
    header: {
      icon: string;
      text: string;
      button: string;
    };
    overview: {
      container1: string;
      container2: string;
      container3: string;
      button: string;
      buttonIcon: string;
    };
    action: {
      verb: string;
      prep1: string;
      prep2: string;
      icon: string;
    };
    validation: {
      loader: string;
      successful: {
        title: string;
        subtitle: string;
      };
      unsuccessful: {
        title: string;
        subtitle: string;
      };
    };
  };
}
