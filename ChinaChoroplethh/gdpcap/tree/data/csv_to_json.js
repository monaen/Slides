function csv2json(csvFileName, countryValueFieldName, provinceValueFieldName, callback) {
  d3.csv(csvFileName, function(error, data) {
    var returnObj = {'parent': 'null', 'children': []};
    data.forEach(function(d) {
      returnObj['name'] = d.province;
      returnObj['parent'] = 'null';
      returnObj['value'] = d[provinceValueFieldName];
      returnObj['children'].push({
        'name': d.country,
        'value': d[countryValueFieldName],
        'parent': 'Top Level',
        'icon': '../../../pic/flags/' + d.country + '.png'
      });
    });
    callback([returnObj]);
  });
}

function csv2jsonForGdp(csvFileName, callback) {
  csv2json(csvFileName, 'country_gdp_pc', 'province_gpd_pc', callback);
}