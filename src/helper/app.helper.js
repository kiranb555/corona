const Helper = {
  latestData: data => {
    let list = Object.keys(data);
    let newData = [];
    list.map(function(e, i) {
      let el = data[e];
      let length = el.length;
      let latest = el[length - 1];

      let obj = {};

      obj = { ...latest };
      obj["country"] = list[i];

      return newData.push(obj);
    });

    // sorting data
    newData.sort(function(a, b) {
      var confA = a["confirmed"];
      var confB = b["confirmed"];
      if (confA < confB) {
        return 1;
      }
      if (confA > confB) {
        return -1;
      }

      // names must be equal
      return 0;
    });
    return newData;
  },
  detail: data => {
    let confirm = [],
      death = [],
      recovery = [];

    for (let i = 0; i < data.length; i++) {
      confirm.push(data[i]["confirmed"]);
      death.push(data[i]["deaths"]);
      recovery.push(data[i]["recovered"]);
    }

    let cnf_total = confirm.reduce((a, b) => a + b, 0);
    let dth_total = death.reduce((a, b) => a + b, 0);
    let rcy_total = recovery.reduce((a, b) => a + b, 0);

    return [cnf_total, dth_total, rcy_total];
  }
};

export default Helper;
