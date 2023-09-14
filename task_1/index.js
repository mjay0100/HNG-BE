const app = require("express")();
const moment = require("moment");
const PORT = 3000;
const current_day = moment().format("dddd");
const utc_time = moment.utc().format();

app.get("/info", (req, res) => {
  const { slack_name, track } = req.query;
  const status = res.statusCode;
  // Check if both parameters are provided
  if (!slack_name || !track) {
    return res.status(400).json({ error: "All parameters are required." });
  }
  const response = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url: "https://github.com/mjay0100/HNG-BE/blob/main/index.js",
    github_repo_url: "https://github.com/mjay0100/HNG-BE",
    status_code: status,
  };

  res.status(200).json(response);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
