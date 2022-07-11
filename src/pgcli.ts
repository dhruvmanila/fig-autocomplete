const completionSpec: Fig.Spec = {
  name: "pgcli",
  description: "Postgres CLI with autocompletion and syntax highlighting",
  options: [
    {
      name: ["-h", "--host"],
      description: "Host address of the postgres database",
      args: {},
    },
    {
      name: ["-p", "--port"],
      description: "Port number at which the postgres instance is listening",
      args: {},
    },
    {
      name: ["-U", "--username"],
      description: "Username to connect to the postgres database",
      args: {},
    },
    {
      name: ["-u", "--user"],
      description: "Username to connect to the postgres database",
      args: {},
    },
    {
      name: ["-W", "--password"],
      description: "Force password prompt",
    },
    {
      name: ["-w", "--no-password"],
      description: "Never prompt for password",
    },
    {
      name: "--single-connection",
      description: "Do not use a separate connection for completions",
    },
    {
      name: ["-d", "--dbname"],
      description: "Database name to connect to",
      args: {},
    },
    {
      name: "--pgclirc",
      description: "Location of pgclirc file",
      args: {},
    },
    {
      name: ["-D", "--dsn"],
      description:
        "Use DSN configured into the [alias_dsn] section of pgclirc file",
      args: {},
    },
    {
      name: "--list-dsn",
      description:
        "List of DSN configured into the [alias_dsn] section of pgclirc file",
    },
    {
      name: "--row-limit",
      description:
        "Set threshold for row limit prompt. Use 0 to disable prompt",
      args: {},
    },
    {
      name: "--less-chatty",
      description: "Skip intro on startup and goodbye on exit",
    },
    {
      name: "--prompt",
      description: "Prompt format",
      args: {
        default: "\\u@\\h:\\d> ",
      },
    },
    {
      name: "--prompt-dsn",
      description: "Prompt format for connections using DSN aliases",
      args: {
        default: "\\u@\\h:\\d> ",
      },
    },
    {
      name: ["-l", "--list"],
      description: "List available databases, then exit",
    },
    {
      name: "--auto-vertical-output",
      description:
        "Automatically switch to vertical output mode if the result is wider than the terminal width",
    },
    {
      name: "--warn",
      description: "Warn before running a destructive query",
      args: {
        suggestions: ["all", "moderate", "off"],
      },
    },
    {
      name: "--ssh-tunnel",
      description:
        "Open an SSH tunnel to the given address and connect to the database from it",
      args: {},
    },
    {
      name: ["-v", "--version"],
      description: "Version of pgcli",
    },
    {
      name: "--help",
      description: "Show this message and exit",
    },
  ],
  args: [
    {
      name: "dbname",
    },
    {
      name: "username",
    },
  ],
};

export default completionSpec;
