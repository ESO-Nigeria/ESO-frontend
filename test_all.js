async function testAPI() {
  let res, data;
  
  // Test Reports
  res = await fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/reports/");
  data = await res.json();
  if (data.results && data.results.length > 0) {
    const report = data.results[0];
    res = await fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/reports/" + encodeURIComponent(report.title) + '/');
    console.log("Report by title:", res.status);
  }

  // Test ESOs (profiles)
  res = await fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/profiles/");
  data = await res.json();
  if (data.results && data.results.length > 0) {
    const eso = data.results[0];
    const name = eso.organization_name || eso.user.organization_name;
    res = await fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/profiles/" + encodeURIComponent(name) + '/');
    console.log("ESO by name:", res.status);
  }

  // Test Programmes
  res = await fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/programs/");
  data = await res.json();
  if (data.results && data.results.length > 0) {
    const prog = data.results[0];
    res = await fetch("https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net/api/programs/" + encodeURIComponent(prog.title) + '/');
    console.log("Program by title:", res.status);
  }
}
testAPI();
