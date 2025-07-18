const Calender = () => (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', color:'white'}}>
      <svg width='40px' height='40px' xmlns="http://www.w3.org/2000/svg" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 81 82">
        <use href="#a" x=".5" y=".5"/>
        <symbol id="a" overflow="visible">
          <g fillRule="nonzero" stroke="none">
            <path d="M61.052 18.947H18.947v42.105h42.105z"/>
            <path fill="#ea4335" d="M61.053 80 80 61.053H61.053z"/>
            <path fill="#fbbc04" d="M80 18.947H61.053v42.105H80z"/>
            <path fill="#34a853" d="M61.052 61.053H18.947V80h42.105z"/>
            <path fill="#188038" d="M0 61.053v12.632A6.314 6.314 0 0 0 6.316 80h12.632V61.053z"/>
            <path fill="#1967d2" d="M80 18.947V6.316A6.314 6.314 0 0 0 73.685 0H61.053v18.947z"/>
            <path fill="#4285f4" d="M61.053 0H6.316A6.314 6.314 0 0 0 0 6.316v54.737h18.947V18.947h42.105V0zM27.584 51.611c-1.574-1.063-2.663-2.616-3.258-4.668l3.653-1.505q.498 1.894 1.737 2.937c1.239 1.043 1.821 1.037 2.989 1.037q1.792 0 3.079-1.089c1.287-1.089 1.29-1.653 1.29-2.774a3.44 3.44 0 0 0-1.358-2.811c-.905-.727-2.042-1.089-3.4-1.089h-2.111v-3.616H32.1q1.752 0 2.953-.947c1.201-.947 1.2-1.495 1.2-2.595q0-1.467-1.074-2.342c-1.074-.875-1.621-.879-2.721-.879q-1.61-.002-2.558.858c-.948.86-1.106 1.301-1.379 2.111l-3.616-1.505c.479-1.358 1.358-2.558 2.647-3.595s2.937-1.558 4.937-1.558q2.22-.002 3.989.858c1.769.86 2.105 1.368 2.774 2.379s1 2.153 1 3.416q0 1.932-.932 3.274c-.932 1.342-1.384 1.579-2.289 2.058v.216a6.95 6.95 0 0 1 2.937 2.289q1.146 1.538 1.147 3.684c.001 2.146-.363 2.711-1.089 3.832s-1.732 2.005-3.005 2.647c-1.279.642-2.716.968-4.311.968-1.847.005-3.553-.526-5.126-1.589zm22.437-18.126-4.01 2.9-2.005-3.042 7.195-5.189h2.758v24.479h-3.937V33.484z"/>
          </g>
        </symbol>
      </svg>
        <label htmlFor="text">Calender</label>
      </div>
  );
  
  export default Calender;