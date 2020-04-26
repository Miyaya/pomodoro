var vm = new Vue({
  el: '#app',
  data: {
		pomodoro: true,
    title: 'POMODORO',
		timer: null, // play/pause
		totalTime: 60*25,
		resetBtn: false,
		taskName: 'Task1',
		done: 'Done',
		weekdays: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
		year: '2020',
		month: '1',
		date: '1',
		weekday: 'Mon.',
		hour: '--',
		minute: '--'
  },
	methods: {
		startTimer: function() {
			this.timer = setInterval(() => this.countdown(), 1000);
			// this.resetBtn = true;
		},
		countdown: function() {
			if(this.totalTime>0) {
				this.totalTime--;
			}
			else {
				this.resetTimer();
			}
		},
		pauseTimer: function() {
			clearInterval(this.timer);
			this.timer = null;
			// this.resetBtn = true;
		},
		resetTimer: function() {
			this.totalTime = 60*25;
			clearInterval(this.timer);
			this.timer = null;
			this.resetBtn = false;
		},
		padTime: function(time) {
			return (time<10? '0':'') + time;
		},
		getNow: function() {
			const now = new Date();
			this.year = now.getFullYear();
			this.month = now.getMonth()+1;
			this.date = now.getDate();
			this.weekday = this.weekdays[now.getDay()];
			this.hour = now.getHours();
			this.minute = now.getMinutes()<10?('0'+now.getMinutes()):now.getMinutes();
		}
	},
	created() {
			setInterval(this.getNow, 1000);
	},
	computed: {
		minutes: function() {
			const mm = Math.floor(this.totalTime/60);
			return this.padTime(mm);
		},
		seconds: function() {
			const ss = Math.floor(this.totalTime%60);
			return this.padTime(ss);
		}
		
	}
})