import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {LineChart, ProgressChart} from 'react-native-chart-kit';

const BezierLineChart = () => {
  return (
    <>
      <LineChart
        data={{
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          datasets: [
            {
              data: [30, 31, 38, 69, 70, 70],
            },
          ],
        }}
        width={Dimensions.get('window').width + 150} // from react-native
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fafaf8',
          backgroundGradientTo: '#fafaf8',
          color: (opacity = 1) => `rgba(79,131,125, ${opacity})`,
          labelColor: () => 'transparent', // Hides axis labels
          propsForBackgroundLines: {
            strokeDasharray: '',
            stroke: 'transparent', // Hides grid lines
          },
          propsForDots: {
            r: '2.5',
          },
        }}
        bezier
        withVerticalLabels={false}
        withHorizontalLabels={false}
        withInnerLines={false}
        style={{}}
      />
    </>
  );
};

const LifeReport = () => {
  const currentWeekData = [
    {day: 'Monday', tags: ['Moody', 'Cranky', 'Emotional']},
    {day: 'Tuesday', tags: ['Anxious', 'Desire', 'Rebellion']},
    {day: 'Wednesday', tags: ['Drive', 'Career', 'Energetic']},
    {day: 'Thursday', tags: ['Moody', 'Cranky', 'Emotional']},
    {day: 'Friday', tags: ['Anxious', 'Tired', 'Argumentative']},
    {day: 'Saturday', tags: []},
    {day: 'Sunday', tags: ['Happy', 'Outgoing', 'Excited']},
  ];

  const lastWeekData = [
    {day: 'Monday', tags: ['Happy', 'Creative', 'Calm']},
    {day: 'Tuesday', tags: ['Anxious', 'Desire', 'Rebellion']},
    {day: 'Wednesday', tags: ['Drive', 'Career', 'Energetic']},
    {day: 'Thursday', tags: ['Moody', 'Cranky', 'Emotional']},
    {day: 'Friday', tags: ['Anxious', 'Tired', 'Argumentative']},
  ];

  const renderTags = tags => {
    return tags.map((tag, index) => (
      <View key={index} style={styles.tag}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.title}>
          <Image
            style={styles.headerBackIcon}
            source={require('./Pics/back.png')}
          />
          <Text style={styles.headerTitle}>Life report</Text>
          <Image
            style={styles.headerListIcon}
            source={require('./Pics/list.png')}
          />
          <Image
            style={styles.headerDropIcon}
            source={require('./Pics/arrowDown.png')}
          />
        </View>
        <View style={styles.icons}>
          <Image
            style={styles.headerIcon}
            source={require('./Pics/share.png')}
          />
          <Image
            style={styles.headerIcon}
            source={require('./Pics/setting.png')}
          />
        </View>
      </View>

      {/* Main Body */}
      <View style={styles.currentWeek}>
        <View style={styles.currentWeekTitle}>
          <Image
            style={styles.currentWeekIcon}
            source={require('./Pics/arrowUp.png')}
          />
          <Text style={styles.currentWeekText}>May, Week 4</Text>
          <Image
            style={styles.currentWeekIcon}
            source={require('./Pics/arrowDown.png')}
          />
        </View>
        {/* Chart */}

        <View style={styles.chartContainer}>
          {/* <BezierLineChart /> */}
          <Image style={styles.chart} source={require('./Pics/graph.png')} />
        </View>

        <View style={styles.weekDays}>
          <Text style={styles.day}>M</Text>
          <Text style={styles.day}>T</Text>
          <Text style={styles.day}>W</Text>
          <Text style={styles.holyday}>T</Text>
          <Text style={styles.day}>F</Text>
          <Text style={styles.day}>S</Text>
          <Text style={styles.day}>S</Text>
        </View>
        {/* Current Week Section */}
        <View style={styles.weekSection}>
          {currentWeekData.map((dayData, index) => (
            <View key={index} style={styles.dayRow}>
              <Text style={styles.dayText}>{dayData.day}</Text>
              <View style={styles.tagsContainer}>
                {renderTags(dayData.tags)}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Last Week Section */}
      <View style={styles.weekSection}>
        <Text style={styles.weekTitle}>Last week</Text>
        {lastWeekData.map((dayData, index) => (
          <View key={index} style={styles.dayRow}>
            <Text style={styles.dayText}>{dayData.day}</Text>
            <View style={styles.tagsContainer}>{renderTags(dayData.tags)}</View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerBackIcon: {
    width: 32,
    height: 32,
    marginTop: 2,
  },

  headerTitle: {
    fontSize: 25,
    color: '##42786b',
    fontFamily: 'serif',
  },

  headerListIcon: {
    width: 21,
    height: 21,
    marginLeft: 10,
    marginTop: 5,
  },

  headerDropIcon: {
    width: 11,
    height: 11,
    marginLeft: 10,
    marginTop: 3,
  },

  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },

  currentWeek: {
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    overflow: 'hidden',
  },

  currentWeekTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },

  currentWeekIcon: {
    width: 12,
    height: 12,
    marginRight: 0,
  },

  currentWeekText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#42786b',
    fontFamily: 'serif',
  },

  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 155,
  },

  chart: {
    width: '100%' /* Make the graph take the full width of the container */,
    height: '100%' /* Make the graph take the full height of the container */,
    resizeMode: 'contain',
    marginTop: -2,
  },

  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'gray',
    marginTop: -5,
  },

  day: {
    fontSize: 15,
    color: '#42786b',
    fontFamily: 'serif',
  },

  holyday: {
    color: '#b6bcb8',
    fontSize: 15,
    fontFamily: 'serif',
  },

  weekSection: {
    margin: 10,
  },

  weekTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
  },

  dayText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'serif',
    width: 90,
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'flex-end',
  },

  tag: {
    backgroundColor: '#ade5da',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 3,
  },

  tagText: {
    fontSize: 13,
    color: '#333',
  },
});

export default LifeReport;
