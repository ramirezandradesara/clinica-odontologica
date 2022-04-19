package com.dh.clinica.login;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<AppUser, Long> {

    //@Override
   // Optional<AppUser> findById(Long aLong);

    Optional<AppUser> findByEmail(String email);
}
