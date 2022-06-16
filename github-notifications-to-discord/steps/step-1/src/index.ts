import { WebhookClient, MessageEmbed } from "discord.js";
import type { Args, Issue, Label } from "./types";

const getColor = (issue: Issue): string => {
  const labels = ["bug", "feature"];
  const label = issue.labels.find((label: Label) =>
    labels.includes(label.name)
  );
  return label ? label.color : "000000";
};

export async function run({ event }: Args) {
  const { data } = event;

  // Only opens for the core open source repo
  if (data.action !== "opened" || data.repository.id != 374763231) {
    return "No action taken";
  }

  const DISCORD_WEBHOOK_URL = process.env.DISCORD_COMMUNITY_WEBHOOK_URL_ISSUES;
  if (!DISCORD_WEBHOOK_URL) {
    throw new Error("DISCORD_COMMUNITY_WEBHOOK_URL_ISSUES is not set");
  }

  const client = new WebhookClient({ url: DISCORD_WEBHOOK_URL });

  const embed = new MessageEmbed()
    .setColor(`#${getColor(data.issue)}`)
    .setURL(data.issue.html_url)
    .setTitle(`${data.issue.title} (#${data.issue.number})`)
    .setAuthor({
      name: data.issue.user.login,
      iconURL: data.issue.user.avatar_url,
    })
    .setTimestamp()
    .setFooter({
      text: data.repository.full_name,
      iconURL: data.repository.owner.avatar_url,
    });

  const res = await client.send({ embeds: [embed] });
  return res.id;
}
