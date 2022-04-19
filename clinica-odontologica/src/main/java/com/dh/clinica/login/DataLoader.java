package com.dh.clinica.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.security.CryptoPrimitive;

@Component
public class DataLoader implements ApplicationRunner {

    private UserRepository userRepository;

    @Autowired
    public DataLoader(UserRepository userRepository){
        this.userRepository =  userRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
     BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(); // encriptamos la contra
        String password = passwordEncoder.encode("password");
        String password2 = passwordEncoder.encode("password2");

        userRepository.save(new AppUser("Charly", "charly", "charly@digital.com", password, AppUsuarioRoles.ADMIN));
        userRepository.save(new AppUser("Charly2", "charly2", "charly2@digital.com", password2, AppUsuarioRoles.USER));
    }
}
