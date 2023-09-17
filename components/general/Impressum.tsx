import { Grid, Text, Container, createStyles, Title, Space } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: 100,
    position: 'relative',
    marginBottom: theme.spacing.xl,
  },

  }));

export function Impressum() {
const { classes } = useStyles();

  return (
    <Container size="lg" className={classes.wrapper}>
      <Grid>
        <Grid.Col>
          <Title>
            Impressum
          </Title>
        <Text fw={700} fz="lg" mt="xl">Angaben gemäß § 5 TMG</Text>
        <Text fz="md">
          <div>
          Jörg Jenke <br/>
          Weimarische Str. 16 <br/>
          01127 Dresden
          </div>
        </Text>
        <Space h="md" />
        <Text fz="md">E-Mail: joerg.jenke@gmail.com</Text>
        <Space h="xs" />
        <Text fw={700} fz="lg" mt="xl">Haftungsausschluss</Text>
        <Space h="xs" />
        <Text fw={500} fz="lg">Haftung für Inhalte</Text>
        <Text fz="md">
          <div>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </div>
        </Text>
        <Text fw={500} fz="lg" mt="xs">Haftung für Links</Text>
        <Text fz="md">
          <div>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.          </div>
        </Text>
        <Text fw={500} fz="lg" mt="xs">Urheberrecht</Text>
        <Text fz="md">
          <div>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.        
          </div>
        </Text>
        <Text fw={500} fz="lg" mt="xs">Datenschutz</Text>
        <Text fz="md">
          <div>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.

Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.

Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.          </div>
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}